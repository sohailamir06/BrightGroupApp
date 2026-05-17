import { View } from 'react-native';

import AppText from '../../AppText';
import AuthorCard from './AuthorCard';
import TagBadge from './TagBadge';

export default function NewsMetaInfo({ article, author, meta }) {
  return (
    <View>
      <TagBadge label={article.categoryLabel} />
      <AppText className="mt-[33px] text-[34px] font-bold leading-[45px] text-[#20242A]">
        {article.title}
      </AppText>
      <AuthorCard author={author} meta={meta} />
    </View>
  );
}
