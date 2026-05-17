import { ScrollView, View } from 'react-native';

import OrgChartNode from './OrgChartNode';

function TreeNode({ node, depth, expandedIds, onToggle }) {
  const expanded = expandedIds.includes(node.id);

  return (
    <View>
      <OrgChartNode depth={depth} expanded={expanded} node={node} onToggle={onToggle} />
      {expanded
        ? (node.children || [])
            .filter((child) => typeof child !== 'string')
            .map((child) => (
              <TreeNode
                depth={depth + 1}
                expandedIds={expandedIds}
                key={child.id}
                node={child}
                onToggle={onToggle}
              />
            ))
        : null}
    </View>
  );
}

export default function OrgChartTree({ hierarchy, expandedIds, onToggle }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="min-w-[342px]">
        <TreeNode depth={0} expandedIds={expandedIds} node={hierarchy} onToggle={onToggle} />
      </View>
    </ScrollView>
  );
}
