import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppText from '../../components/AppText';
import EmployeeCard from '../../components/org-chart/EmployeeCard';
import OrgHeader from '../../components/org-chart/OrgHeader';
import { useTeamDetails } from '../../hooks/org-chart/useTeamDetails';

export default function TeamDetailsScreen({ route }) {
  const details = useTeamDetails(route.params?.teamId);

  return (
    <SafeAreaView className="flex-1 items-center bg-orgCanvas">
      <View className="w-full max-w-[390px] flex-1 bg-orgCanvas">
        <OrgHeader />
        <FlatList
          contentContainerClassName="px-[24px] pb-[48px] pt-[40px]"
          data={details.employees}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <View className="mb-[26px]">
              <AppText className="text-[10px] font-bold uppercase tracking-[1.5px] text-homeBlue">
                Team Detail
              </AppText>
              <AppText className="mt-[10px] text-[34px] font-bold leading-[40px] text-charcoal">
                {details.team.name}
              </AppText>
              <AppText className="mt-[8px] text-[15px] leading-[22px] text-muted">
                {details.employees.length} members in this local mock team. Ready for role permissions,
                lazy loading, and realtime org updates.
              </AppText>
            </View>
          }
          renderItem={({ item }) => <EmployeeCard employee={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
