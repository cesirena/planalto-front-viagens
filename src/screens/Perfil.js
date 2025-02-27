import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { StyleSheet, Switch} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-datepicker';

const Page = styled.SafeAreaView`
  flex: 1;
  background-color: #F2F2F2;
  align-items: center;
`;

const Container = styled.ScrollView`
  width: 90%;
`;

const InputView = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #A4A4A4;
  margin-bottom: 20px;
  padding-left: 10px;
  overflow: hidden;
`;

const SelectorView = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #A4A4A4;
  margin-bottom: 20px;
  height: 40px;
  display: flex;
  justify-content: center; 
  overflow: hidden;
`;

const Input = styled.TextInput`
  height: 40px;
  font-size: 18px;
  overflow: hidden;
  padding: 0;
`;

const Button = styled.TouchableHighlight`
  margin-bottom: 10px;
  flex: 1; 
`;

const LoginText = styled.Text`
  color: white;
  background-color: #04B431;
  font-size: 22px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

const Header = styled.View`
  width: 100%;
  background-color: #088A29;
  height: 50px;
  align-items: flex-start;
  flex-direction: row;
`;//Area que contem o titulo da tela

const HeaderText = styled.Text`
  color: white;
  font-size: 22px;
  padding: 10px;
`;//Titulo da tela

const BackButton = styled.TouchableHighlight`
  background-color: #088A29;
  color: red;
  font-size: 22px;
  font-weight: bold;
  width: 10%;
  margin-top: 13px;
  align-items: center;
`;

const Title = styled.View`
  width: 100%;
  background-color: #D8D8D8;
  height: 50px;
  margin-bottom: 20px;
  align-items: flex-start;
  justify-content: center;
`;

const TitleText = styled.Text`
  color: #848484;
  font-size: 18px;
  padding: 10px;
  font-weight: bold;
`;

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  }
});

export default function Cadastro ({navigation, route}) {
  console.log(route.params.dataHandler.getAccessToken());
  console.log(route.params.userData);

  // const datahoje = new Date();
  // const datainicial = new Date(1900,0,1);
  const [nome, setNome] = useState(route.params.userData.user.name);
  const [documento, setDocumento] = useState(route.params.userData.user.document);
  // const [datanascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState(route.params.userData.user.email);
  const [tipotelefone, setTipoTelefone] = useState(route.params.userData.user.phone_type);
  const [telefone, setTelefone] = useState(route.params.userData.user.phone);
  const [cep, setCep] = useState(route.params.userData.user.addr_postal_code);
  const [rua, setRua] = useState(route.params.userData.user.addr_street);
  const [numero, setNumero] = useState(route.params.userData.user.addr_number);
  const [complemento, setComplemento] = useState(route.params.userData.user.addr_additional_info);
  const [bairro, setBairro] = useState(route.params.userData.user.neighbourhood);
  const [cidade, setCidade] = useState(route.params.userData.user.city);
  const [estado, setEstado] = useState(route.params.userData.user.state);

  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const atualizarCadastro = async () =>{
    console.log("Vou atualizar!")
  }

  return (
    <Page>
      <Header>
        <BackButton onPress={() => navigation.goBack()} underlayColor='#1ab241'>
        <Icon name="arrowleft" color="white" size={25}/>
        </BackButton>
        <HeaderText>Cadastro</HeaderText>
      </Header>
      <Title>
        <TitleText>Dados Pessoais</TitleText>
      </Title>
      <Container>
        <InputView>
          <Input value={nome} onChangeText={t=>setNome(t)} placeholder={'Nome completo'}/>
        </InputView>
        <InputView>
          <Input value={documento} onChangeText={t=>setDocumento(t)} placeholder={'Documento'}/>
        </InputView>
        {/* <InputView>
          <DatePicker
            style={styles.datePickerStyle}
            date={datanascimento}
            mode="date"
            placeholder="Data de Nascimento"
            format="DD/MM/YYYY"
            minDate={datainicial}
            maxDate={datahoje}
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
                borderWidth: 0,
              },
            }}
            onDateChange={(datanascimento) => {setDataNascimento(datanascimento)}}/>
        </InputView> */}
        <InputView>
          <Input value={email} onChangeText={t=>setEmail(t)} placeholder={'E-mail'}/>
        </InputView>
        {/* <InputView>
          <Input value={confirmaemail} onChangeText={t=>setConfirmaEmail(t)} placeholder={'Confirmação de e-mail'}/>
        </InputView> */}
        <SelectorView>
        <Picker selectedValue={tipotelefone} mode={'dropdown'} onValueChange={t=>setTipoTelefone(t)}>
          <Picker.Item style={styles.item} label="Celular" value="1"/>
          <Picker.Item style={styles.item} label="Residencial" value="2"/>
          <Picker.Item style={styles.item} label="Comercial" value="3"/>
        </Picker>
        </SelectorView>
        <InputView>
          <Input value={telefone} onChangeText={t=>setTelefone(t)} placeholder={'Telefone'}/>
        </InputView>
        {/* <InputView>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        </InputView> */}
        <InputView>
          <Input value={cep} onChangeText={t=>setCep(t)} placeholder={'Cep'}/>
        </InputView>
        <InputView>
          <Input value={rua} onChangeText={t=>setRua(t)} placeholder={'Rua'}/>
        </InputView>
        <InputView>
          <Input value={numero} onChangeText={t=>setNumero(t)} placeholder={'Número'}/>
        </InputView>
        <InputView>
          <Input value={complemento} onChangeText={t=>setComplemento(t)} placeholder={'Complemento'}/>
        </InputView>
        <InputView>
          <Input value={bairro} onChangeText={t=>setBairro(t)} placeholder={'Bairro'}/>
        </InputView>
        <InputView>
          <Input value={cidade} onChangeText={t=>setCidade(t)} placeholder={'Cidade'}/>
        </InputView>
        <SelectorView>
        <Picker selectedValue={estado} mode={'dropdown'} onValueChange={t=>setEstado(t)}>
          <Picker.Item style={styles.item} value="AC" label="Acre"/>
          <Picker.Item style={styles.item} value="AL" label="Alagoas"/>
          <Picker.Item style={styles.item} value="AP" label="Amapá"/>
          <Picker.Item style={styles.item} value="AM" label="Amazonas"/>
          <Picker.Item style={styles.item} value="BA" label="Bahia"/>
          <Picker.Item style={styles.item} value="CE" label="Ceará"/>
          <Picker.Item style={styles.item} value="DF" label="Distrito Federal"/>
          <Picker.Item style={styles.item} value="ES" label="Espírito Santo"/>
          <Picker.Item style={styles.item} value="GO" label="Goiás"/>
          <Picker.Item style={styles.item} value="MA" label="Maranhão"/>
          <Picker.Item style={styles.item} value="MT" label="Mato Grosso"/>
          <Picker.Item style={styles.item} value="MS" label="Mato Grosso do Sul"/>
          <Picker.Item style={styles.item} value="MG" label="Minas Gerais"/>
          <Picker.Item style={styles.item} value="PA" label="Pará"/>
          <Picker.Item style={styles.item} value="PB" label="Paraíba"/>
          <Picker.Item style={styles.item} value="PR" label="Paraná"/>
          <Picker.Item style={styles.item} value="PE" label="Pernambuco"/>
          <Picker.Item style={styles.item} value="PI" label="Piauí"/>
          <Picker.Item style={styles.item} value="RJ" label="Rio de Janeiro"/>
          <Picker.Item style={styles.item} value="RN" label="Rio Grande do Norte"/>
          <Picker.Item style={styles.item} value="RS" label="Rio Grande do Sul"/>
          <Picker.Item style={styles.item} value="RO" label="Rondônia"/>
          <Picker.Item style={styles.item} value="RR" label="Roraima"/>
          <Picker.Item style={styles.item} value="SC" label="Santa Catarina"/>
          <Picker.Item style={styles.item} value="SP" label="São Paulo"/>
          <Picker.Item style={styles.item} value="SE" label="Sergipe"/>
          <Picker.Item style={styles.item} value="TO" label="Tocantins"/>
        </Picker>
        </SelectorView>
        <Button onPress={atualizarCadastro}>
          <LoginText>Cadastrar</LoginText>
        </Button>
      </Container>
    </Page>
  );
}