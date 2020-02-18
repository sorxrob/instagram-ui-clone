import React from 'react';
import { Container, Content } from 'native-base';
import { StyleSheet } from 'react-native';
import CardComponent from '../CardComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const items = [
  {
    username: 'johncena',
    avatar: 'https://robohash.org/johncena.png',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam mollitia earum voluptates expedita tempore praesentium culpa! Repellat nam est explicabo vel eius. Id, eius rem.',
  },
  {
    username: 'tripleh',
    avatar: 'https://robohash.org/triple.png',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, id nihil temporibus exercitationem consequuntur consectetur?',
  },
  {
    username: 'batista',
    avatar: 'https://robohash.org/batista.png',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, velit?',
  },
];

const HomeTab = () => {
  return (
    <Container style={styles.container}>
      <Content>
        {items.map(item => (
          <CardComponent
            key={item.username}
            username={item.username}
            avatar={item.avatar}
            text={item.text}
          />
        ))}
      </Content>
    </Container>
  );
};

export default HomeTab;
