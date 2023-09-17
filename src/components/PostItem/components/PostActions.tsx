import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function likePost() {
    //TODO: implement like post
  }
  function navigateToComments() {
    //TODO: implement like post
  }
  function favoritePost() {
    //TODO: implement like post
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        onPress={likePost}
        icon={{default: 'heart', marked: 'heartFill'}}
        text={reactionCount}
      />
      <Item
        marked={false}
        onPress={likePost}
        icon={{default: 'comment', marked: 'comment'}}
        text={reactionCount}
      />
      <Item
        marked={false}
        onPress={likePost}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        text={reactionCount}
      />
    </Box>
  );
}

interface ItemProps {
  marked: boolean;
  text: number;
  onPress: () => void;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({onPress, icon, marked, text}: ItemProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      flexDirection="row"
      alignItems="center"
      mr="s14"
    >
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s4" semiBold>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
