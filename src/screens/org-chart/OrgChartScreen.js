import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNavigation from '../../components/home/BottomNavigation';
import AppText from '../../components/AppText';
import EmployeeCard from '../../components/org-chart/EmployeeCard';
import EmptyState from '../../components/org-chart/EmptyState';
import FilterChip from '../../components/org-chart/FilterChip';
import LoadingSkeleton from '../../components/org-chart/LoadingSkeleton';
import OrgChartTree from '../../components/org-chart/OrgChartTree';
import OrgHeader from '../../components/org-chart/OrgHeader';
import SearchBar from '../../components/org-chart/SearchBar';
import TeamPreviewCard from '../../components/org-chart/TeamPreviewCard';
import { ROUTES } from '../../constants/routes';
import { useOrgChart } from '../../hooks/org-chart/useOrgChart';

export default function OrgChartScreen({ navigation }) {
  const org = useOrgChart();

  const handleTabPress = (tabKey) => {
    if (tabKey === 'home') {
      navigation.navigate(ROUTES.HOME);
    }
    if (tabKey === 'search') {
      navigation.navigate(ROUTES.SEARCH);
    }
    if (tabKey === 'chat') {
      navigation.navigate(ROUTES.CHAT_LIST);
    }
    if (tabKey === 'content') {
      navigation.navigate(ROUTES.CONTENT_FEED);
    }
  };

  const openEmployee = (employee) => {
    org.setSelectedEmployeeId(employee.id);
    navigation.navigate(ROUTES.TEAM_DETAILS, { teamId: employee.teamId });
  };

  const renderHeader = () => (
    <View className="px-[24px] pb-[28px] pt-[40px]">
      <AppText className="text-[10px] font-bold uppercase leading-[12px] tracking-[1.5px] text-homeBlue">
        Company Directory
      </AppText>
      <AppText className="mt-[10px] text-[36px] font-bold leading-[42px] tracking-[-1.1px] text-charcoal">
        The Talent Hub
      </AppText>
      <AppText className="mt-[13px] text-[14px] leading-[21px] text-muted">
        Connect with our global network of{'\n'}innovators and creators across all 12{'\n'}departments.
      </AppText>
      <View className="mt-[15px]">
        <SearchBar value={org.query} onChangeText={org.setQuery} onClear={org.clearQuery} />
      </View>
      <View className="mt-[18px] flex-row flex-wrap">
        {org.departments.map((department) => (
          <FilterChip
            active={department.id === org.activeDepartmentId}
            key={department.id}
            label={department.label}
            onPress={() => org.setActiveDepartmentId(department.id)}
          />
        ))}
      </View>
      <View className="mt-[14px]">
        <OrgChartTree hierarchy={org.hierarchy} expandedIds={org.expandedIds} onToggle={org.toggleExpanded} />
      </View>
    </View>
  );

  const renderFooter = () => (
    <View className="px-[24px] pb-[26px] pt-[8px]">
      <TeamPreviewCard onPress={() => navigation.navigate(ROUTES.TEAM_DETAILS, { teamId: 'creative-leadership' })} />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 items-center bg-orgCanvas">
      <View className="w-full max-w-[390px] flex-1 bg-orgCanvas">
        <OrgHeader />
        {org.isLoading ? (
          <LoadingSkeleton />
        ) : (
          <FlatList
            className="flex-1"
            contentContainerClassName="min-h-[4699px] pb-[128px]"
            data={org.employees}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={<View className="px-[24px]"><EmptyState /></View>}
            ListFooterComponent={renderFooter}
            ListHeaderComponent={renderHeader}
            renderItem={({ item }) => (
              <View className="px-[24px]">
                <EmployeeCard employee={item} onPress={openEmployee} />
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
        <BottomNavigation activeKey="org" onTabPress={handleTabPress} variant="org" />
      </View>
    </SafeAreaView>
  );
}
