import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Text } from 'native-base';

const styles = StyleSheet.create({
  icon: {
    color: '#000',
  },
});

const CardComponent = props => {
  const { username, avatar, text } = props;
  return (
    <Card transparent>
      <CardItem bordered>
        <Left>
          <Thumbnail small source={{ uri: avatar }} />
          <Body>
            <Text style={{ fontSize: 13 }}>{username}</Text>
          </Body>
        </Left>
        <Right>
          <Button transparent>
            <Icon name="dots-vertical" type="MaterialCommunityIcons" style={styles.icon} />
          </Button>
        </Right>
      </CardItem>

      <CardItem cardBody bordered>
        <Image
          source={{ uri: 'https://placedog.net/600/480?random' }}
          style={{ height: 200, width: '100%', flex: 1 }}
        />
      </CardItem>

      <CardItem style={{ height: 45 }}>
        <Left>
          <Button transparent>
            <Icon name="heart-outline" type="MaterialCommunityIcons" style={styles.icon} />
          </Button>
          <Button transparent>
            <Icon name="bubble" type="SimpleLineIcons" style={styles.icon} />
          </Button>
          <Button transparent>
            <Icon name="send" type="Feather" style={styles.icon} />
          </Button>
        </Left>
      </CardItem>

      <CardItem style={{ height: 20 }}>
        <Text style={{ fontSize: 13 }}>1,069 likes</Text>
      </CardItem>

      <CardItem>
        <Body>
          <Text style={{ fontSize: 13 }}>
            <Text style={{ fontWeight: '900', fontSize: 13 }}>{username} </Text>
            {text}
          </Text>
        </Body>
      </CardItem>
    </Card>
  );
};

export default CardComponent;
