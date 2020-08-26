/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Header, Content, Left, Right, Title, Button, Text, Spinner } from 'native-base';
import { View, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import styles from './styles';
import { FONT_HEADLINE5_PRIMARY, FONT_SUBTITLE1_PRIMARY, FONT_SUBTITLE2_SECONDARY } from '../../styles';
import BackButton from '../../components/elements/BackButton';
import image from '../../configs/images';
import Star from '../../../assets/svgs/Star';
import Pen from '../../../assets/svgs/Pen';
import Trash from '../../../assets/svgs/Trash';
import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDelete: false,
      isSuccess: false,
      data: [],
      isLoading: false,
      selectedId: ''
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
    this.openModal = this.openModal.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    try {
      const { navigation } = this.props;
      const title = navigation.getParam('title', 'Default Title');
      const result = await ENDPOINT.getCategory(title);
      this.setState({ data: result.data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  openModal(id) {
    this.setState({ isDelete: true, selectedId: id });
  }

  close() {
    // eslint-disable-next-line no-useless-return
    return;
  }

  async deleteItem() {
    try {
      const { selectedId, data } = this.state;
      const result = await ENDPOINT.deleteMenu(selectedId);
      if (result.code === 200) {
        this.setState({ isSuccess: true });
        setTimeout(() => {
          const newData = data.filter(item => item.menuId !== selectedId);
          this.setState({ isDelete: false, isSuccess: false, data: newData });
        }, 1000);
      } else {
        Alert.alert(JSON.stringify(result.data));
      }
    } catch (error) {
      Alert.alert(error);
    }
  }

  cancelDelete() {
    this.setState({ isDelete: false });
  }

  addMenu = async () => {
    this.props.navigation.navigate('CreateMenu');
  };
  _editMenu = async () => {
    this.props.navigation.navigate('EditMenu');
  };

  renderSuccess() {
    if (!this.state.isSuccess) {
      return (
        <View style={{ alignItems: 'center' }}>
          <Image source={image.deleteIlus} style={styles.imageDelete} />
          <Text style={[FONT_HEADLINE5_PRIMARY, styles.textDelete]}>Are you sure delete this Item ?</Text>
          <View style={styles.actionModal}>
            <Button onPress={() => this.cancelDelete()} style={styles.cancelModal}>
              <Text>Cancel</Text>
            </Button>
            <Button onPress={() => this.deleteItem()} style={styles.yesModal}>
              <Text>Yes</Text>
            </Button>
          </View>
        </View>
      );
    }
    return (
      <View style={{ alignItems: 'center' }}>
        <Image source={image.successDelete} style={styles.imageDelete} />
        <Text style={[FONT_HEADLINE5_PRIMARY, styles.textDelete]}>Delete Succesfully</Text>
      </View>
    );
  }

  renderList() {
    if (this.state.isLoading) {
      return <Spinner color="#87CAFE" />;
    } else if (this.state.data.length > 0) {
      const list = this.state.data.map(data => (
        <View style={styles.wrapperCard} key={data.menuId}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Image source={{ uri: `http://${data.picture}` }} style={{ width: 60, height: 60 }} />
              <View style={styles.wrapperContent}>
                <Text style={[FONT_SUBTITLE1_PRIMARY, styles.title]}>{data.name}</Text>
                <Text style={[FONT_SUBTITLE2_SECONDARY, styles.textContent]}>{data.description}</Text>
              </View>
            </View>
            <View style={styles.btnStar}>
              <Star />
            </View>
          </View>
          <View style={styles.wrapperAction}>
            <TouchableOpacity style={styles.editAction} onPress={() => this._editMenu}>
              <Pen />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteAction} onPress={() => this.openModal(data.menuId)}>
              <Trash />
            </TouchableOpacity>
          </View>
        </View>
      ));
      return list;
    }
    return (
      <View>
        <View style={styles.wrapperCard}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={{
                  uri: `https://static.vecteezy.com/system/resources/previews/000/134/503/original/free-vector-food-illustration.jpg`
                }}
                style={{ width: 60, height: 60 }}
              />
              <View style={styles.wrapperContent}>
                <Text style={[FONT_SUBTITLE1_PRIMARY, styles.title]}>Lorem</Text>
                <Text style={[FONT_SUBTITLE2_SECONDARY, styles.textContent]}>lorem ipsum dolor sit amet</Text>
              </View>
            </View>
            <View style={styles.btnStar}>
              <Star />
            </View>
          </View>
          <View style={styles.wrapperAction}>
            <TouchableOpacity style={styles.editAction} onPress={() => this._editMenu}>
              <Pen />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteAction} onPress={() => this.openModal}>
              <Trash />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapperCard}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={{
                  uri: `https://static.vecteezy.com/system/resources/previews/000/134/503/original/free-vector-food-illustration.jpg`
                }}
                style={{ width: 60, height: 60 }}
              />
              <View style={styles.wrapperContent}>
                <Text style={[FONT_SUBTITLE1_PRIMARY, styles.title]}>Lorem</Text>
                <Text style={[FONT_SUBTITLE2_SECONDARY, styles.textContent]}>lorem ipsum dolor sit amet</Text>
              </View>
            </View>
            <View style={styles.btnStar}>
              <Star />
            </View>
          </View>
          <View style={styles.wrapperAction}>
            <TouchableOpacity style={styles.editAction} onPress={() => this._editMenu}>
              <Pen />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteAction} onPress={() => this.openModal}>
              <Trash />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapperCard}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={{
                  uri: `https://static.vecteezy.com/system/resources/previews/000/134/503/original/free-vector-food-illustration.jpg`
                }}
                style={{ width: 60, height: 60 }}
              />
              <View style={styles.wrapperContent}>
                <Text style={[FONT_SUBTITLE1_PRIMARY, styles.title]}>Lorem</Text>
                <Text style={[FONT_SUBTITLE2_SECONDARY, styles.textContent]}>lorem ipsum dolor sit amet</Text>
              </View>
            </View>
            <View style={styles.btnStar}>
              <Star />
            </View>
          </View>
          <View style={styles.wrapperAction}>
            <TouchableOpacity style={styles.editAction} onPress={() => this._editMenu}>
              <Pen />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteAction} onPress={() => this.openModal}>
              <Trash />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapperCard}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={{
                  uri: `https://static.vecteezy.com/system/resources/previews/000/134/503/original/free-vector-food-illustration.jpg`
                }}
                style={{ width: 60, height: 60 }}
              />
              <View style={styles.wrapperContent}>
                <Text style={[FONT_SUBTITLE1_PRIMARY, styles.title]}>Lorem</Text>
                <Text style={[FONT_SUBTITLE2_SECONDARY, styles.textContent]}>lorem ipsum dolor sit amet</Text>
              </View>
            </View>
            <View style={styles.btnStar}>
              <Star />
            </View>
          </View>
          <View style={styles.wrapperAction}>
            <TouchableOpacity style={styles.editAction} onPress={() => this._editMenu}>
              <Pen />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteAction} onPress={() => this.openModal}>
              <Trash />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapperCard}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={{
                  uri: `https://static.vecteezy.com/system/resources/previews/000/134/503/original/free-vector-food-illustration.jpg`
                }}
                style={{ width: 60, height: 60 }}
              />
              <View style={styles.wrapperContent}>
                <Text style={[FONT_SUBTITLE1_PRIMARY, styles.title]}>Lorem</Text>
                <Text style={[FONT_SUBTITLE2_SECONDARY, styles.textContent]}>lorem ipsum dolor sit amet</Text>
              </View>
            </View>
            <View style={styles.btnStar}>
              <Star />
            </View>
          </View>
          <View style={styles.wrapperAction}>
            <TouchableOpacity style={styles.editAction} onPress={() => this._editMenu}>
              <Pen />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteAction} onPress={() => this.openModal}>
              <Trash />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapperCard}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={{
                  uri: `https://static.vecteezy.com/system/resources/previews/000/134/503/original/free-vector-food-illustration.jpg`
                }}
                style={{ width: 60, height: 60 }}
              />
              <View style={styles.wrapperContent}>
                <Text style={[FONT_SUBTITLE1_PRIMARY, styles.title]}>Lorem</Text>
                <Text style={[FONT_SUBTITLE2_SECONDARY, styles.textContent]}>lorem ipsum dolor sit amet</Text>
              </View>
            </View>
            <View style={styles.btnStar}>
              <Star />
            </View>
          </View>
          <View style={styles.wrapperAction}>
            <TouchableOpacity style={styles.editAction} onPress={() => this._editMenu}>
              <Pen />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteAction} onPress={() => this.openModal}>
              <Trash />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapperCard}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={{
                  uri: `https://static.vecteezy.com/system/resources/previews/000/134/503/original/free-vector-food-illustration.jpg`
                }}
                style={{ width: 60, height: 60 }}
              />
              <View style={styles.wrapperContent}>
                <Text style={[FONT_SUBTITLE1_PRIMARY, styles.title]}>Lorem</Text>
                <Text style={[FONT_SUBTITLE2_SECONDARY, styles.textContent]}>lorem ipsum dolor sit amet</Text>
              </View>
            </View>
            <View style={styles.btnStar}>
              <Star />
            </View>
          </View>
          <View style={styles.wrapperAction}>
            <TouchableOpacity style={styles.editAction} onPress={() => this._editMenu}>
              <Pen />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteAction} onPress={() => this.openModal}>
              <Trash />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapperCard}>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Image
                source={{
                  uri: `https://static.vecteezy.com/system/resources/previews/000/134/503/original/free-vector-food-illustration.jpg`
                }}
                style={{ width: 60, height: 60 }}
              />
              <View style={styles.wrapperContent}>
                <Text style={[FONT_SUBTITLE1_PRIMARY, styles.title]}>Lorem</Text>
                <Text style={[FONT_SUBTITLE2_SECONDARY, styles.textContent]}>lorem ipsum dolor sit amet</Text>
              </View>
            </View>
            <View style={styles.btnStar}>
              <Star />
            </View>
          </View>
          <View style={styles.wrapperAction}>
            <TouchableOpacity style={styles.editAction} onPress={() => this._editMenu}>
              <Pen />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteAction} onPress={() => this.openModal}>
              <Trash />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const title = navigation.getParam('title', 'Menu');
    const { isDelete } = this.state;
    return (
      <Container>
        <Header style={styles.header}>
          <Left style={styles.headerBox}>
            <BackButton />
            <Text style={[FONT_HEADLINE5_PRIMARY, styles.headerText]}>{title}</Text>
          </Left>
          <Title />
          <Right>
            <View style={styles.btnAdd}>
              <TouchableOpacity onPress={() => this.addMenu()}>
                <Text style={[FONT_SUBTITLE1_PRIMARY, styles.btnMenu]}>+ Add Menu</Text>
              </TouchableOpacity>
            </View>
          </Right>
        </Header>
        <Content>
          <Modal animationType="fade" visible={isDelete} onRequestClose={() => this.close()} transparent>
            <View style={styles.modal}>
              <View style={styles.cardModal}>{this.renderSuccess()}</View>
            </View>
          </Modal>
          <View style={styles.menu}>
            <View style={styles.containerCard} />
            {this.renderList()}
          </View>
        </Content>
      </Container>
    );
  }
}
