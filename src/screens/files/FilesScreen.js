import { FlatList, Pressable, RefreshControl, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

import AppText from '../../components/AppText';
import FileCard from '../../components/files/FileCard';
import FileFilterTabs from '../../components/files/FileFilterTabs';
import FileGridToggle from '../../components/files/FileGridToggle';
import FileListItem from '../../components/files/FileListItem';
import FilePreviewModal from '../../components/files/FilePreviewModal';
import FileSearchBar from '../../components/files/FileSearchBar';
import SearchHeader from '../../components/search/SearchHeader';
import { filesActions, useFilesStore } from '../../store/files/filesStore';
import { filterFiles, searchFiles, sortFiles } from '../../utils/files/fileFilters';

const typeFilters = ['pdf', 'doc', 'xls', 'ppt'];

export default function FilesScreen({ navigation }) {
  const filesState = useFilesStore();
  const filteredFiles = sortFiles(
    filterFiles(searchFiles(filesState.files, filesState.query), filesState),
    filesState.sortId,
  );
  const previewFile = filesState.files.find((file) => file.id === filesState.previewFileId);

  const renderHeader = () => (
    <View className="px-[24px] pb-[20px] pt-[32px]">
      <View className="flex-row items-center">
        <Pressable className="mr-[10px] h-[40px] w-[40px] items-center justify-center" onPress={navigation.goBack}>
          <Feather name="arrow-left" size={22} color="#0B5CD7" />
        </Pressable>
        <View className="flex-1">
          <AppText className="text-[32px] font-bold leading-[38px] text-charcoal">Files & Documents</AppText>
          <AppText className="mt-[5px] text-[15px] leading-[20px] text-muted">
            Search, preview, favorite, and filter shared resources.
          </AppText>
        </View>
      </View>

      <View className="mt-[24px]">
        <FileSearchBar value={filesState.query} onChangeText={filesActions.setQuery} onClear={filesActions.clearQuery} />
      </View>

      <View className="mt-[18px]">
        <FileFilterTabs items={filesState.categories} activeId={filesState.categoryId} onChange={filesActions.setCategory} />
      </View>

      <View className="mt-[18px] flex-row flex-wrap">
        {typeFilters.map((type) => (
          <Pressable
            className={`mb-[10px] mr-[9px] rounded-full px-[15px] py-[9px] ${
              filesState.fileType === type ? 'bg-action' : 'bg-white'
            }`}
            key={type}
            onPress={() => filesActions.setFileType(type)}
          >
            <AppText className={`text-[12px] font-bold uppercase ${filesState.fileType === type ? 'text-homeBlue' : 'text-muted'}`}>
              {type}
            </AppText>
          </Pressable>
        ))}
      </View>

      <View className="mt-[6px] flex-row items-center justify-between">
        <FileFilterTabs items={filesState.sortOptions} activeId={filesState.sortId} onChange={filesActions.setSort} />
        <FileGridToggle value={filesState.viewMode} onChange={filesActions.setViewMode} />
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 items-center bg-canvas">
      <View className="w-full max-w-[390px] flex-1 bg-canvas">
        <SearchHeader />
        <FlatList
          className="flex-1"
          contentContainerClassName="px-[24px] pb-[48px]"
          data={filteredFiles}
          key={filesState.viewMode}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={renderHeader}
          ListEmptyComponent={
            <View className="rounded-[10px] bg-white px-[20px] py-[28px]">
              <AppText className="text-[17px] font-bold text-charcoal">No documents found</AppText>
              <AppText className="mt-[8px] text-[14px] leading-[20px] text-muted">Try another filter or clear search.</AppText>
            </View>
          }
          numColumns={filesState.viewMode === 'grid' ? 2 : 1}
          columnWrapperClassName={filesState.viewMode === 'grid' ? 'justify-between' : undefined}
          refreshControl={<RefreshControl refreshing={filesState.refreshing} onRefresh={filesActions.refresh} />}
          renderItem={({ item }) =>
            filesState.viewMode === 'grid' ? (
              <FileCard file={item} onFavorite={filesActions.toggleFavorite} onPreview={(file) => filesActions.setPreviewFile(file.id)} />
            ) : (
              <FileListItem file={item} onFavorite={filesActions.toggleFavorite} onPreview={(file) => filesActions.setPreviewFile(file.id)} />
            )
          }
          showsVerticalScrollIndicator={false}
        />
        <FilePreviewModal
          file={previewFile}
          visible={Boolean(previewFile)}
          onClose={() => filesActions.setPreviewFile(null)}
          onFavorite={filesActions.toggleFavorite}
        />
      </View>
    </SafeAreaView>
  );
}
