import { useState, useEffect } from 'react';
import Head from 'next/head'
import { Espacio, Titulo, Button, ButtonMusic } from '../Components/Ui';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, update } from 'firebase/database';

export default function Home() {

  const firebaseConfig = {
    apiKey: "AIzaSyDLuS0gr3ileqR8UUn5_hG9Ahn4QaF-T0g",
    authDomain: "frost-box-c5396.firebaseapp.com",
    databaseURL: "https://frost-box-c5396-default-rtdb.firebaseio.com",
    projectId: "frost-box-c5396",
    storageBucket: "frost-box-c5396.appspot.com",
    messagingSenderId: "708255696362",
    appId: "1:708255696362:web:bb274ba116c36fe93a5e93"
  };

  class Firebase {
    constructor(){
        const app = initializeApp(firebaseConfig);
        this.db = getDatabase(app);
    }
  }

  const firebase = new Firebase();

  const [ inputs, setInputs ] = useState([]);
  const [ updateTemp, setUpdateTemp ] = useState(false);
  const [ onOff, setOnOff ] = useState(false);
  const [ musicState, setMusicState ] = useState(false);

  const db = getDatabase();

  const cantInputs = ref(db, '/');

    //Effect para guardar la información de Firebase en los States
    useEffect(() => {
        onValue(cantInputs, snapshot => {
            const inputsSnaps = snapshot.val();
            setInputs(Object.values(inputsSnaps));
        }); 
    }, []);

    //State para recordar el estado de las variables
    if(inputs == [1, 0, 1, 0, 1, 0, 0]) {
      setUpdateTemp(true);
      setMusicState(true);
    } else if(inputs == [1, 0, 1, 0, 1, 0, 1]){
      setUpdateTemp(true);
      setMusicState(false);
    } else if (inputs == [0, 1, 0, 1, 0, 1, 0]) {
      setUpdateTemp(false);
      setMusicState(true);
    } else if(inputs == [0, 1, 0, 1, 0, 1, 1]) {
      setUpdateTemp(false);
      setMusicState(false);
    }

    //Función para cambiar la temperatura
    const handleTemp = (e) => {
      e.preventDefault();
      if(updateTemp == false) {  
          update(ref(db, '/'), {
            input1A: 1,
            input1B: 0,
            input2A: 1,
            input2B: 0,
            input3A: 1,
            input3B: 0,
            input4A: 0
          });
          setUpdateTemp(true);
      } else {
          update(ref(db, '/'), {
            input1A: 0,
            input1B: 1,
            input2A: 0,
            input2B: 1,
            input3A: 0,
            input3B: 1,
            input4A: 0
          });
          setUpdateTemp(false);
      }
  }

  const handleOnOff = (e) => {
    e.preventDefault();
    if(onOff == false) {  
        update(ref(db, '/'), {
          input1A: 1,
          input1B: 0,
          input2A: 1,
          input2B: 0,
          input3A: 1,
          input3B: 0,
          input4A: 0
        });
        setOnOff(true);
        setUpdateTemp(true);
    } else {
        update(ref(db, '/'), {
          input1A: 0,
          input1B: 0,
          input2A: 0,
          input2B: 0,
          input3A: 0,
          input3B: 0,
          input4A: 1,
          input4B: 0
        });
        setOnOff(false);
    }
  }

  const handleMusic = (e) => {
    e.preventDefault();
    if(musicState == false) {  
        update(ref(db, '/'), {
          input4B: 0
        });
        setMusicState(true);
    } else {
        update(ref(db, '/'), {
          input4B: 1
        });
        setMusicState(false);
    }
  }

  return (
    <>
      <Head>
        <title>Frostbox</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Espacio>
          <Titulo>FrostBox</Titulo>
          <Button bgColor={onOff ? '#5cb85c' : '#d9534f'} type="button" onClick={handleOnOff}>
            {onOff ? "Encendido" : "Apagado"}</Button>
          {onOff
            ?
            <Button bgColor={updateTemp ? '#FF5D5D' : '#92B4EC'} type="button" onClick={handleTemp}>
                {updateTemp ? "Calentando" : "Enfriando"}
              </Button>

            :
              null
          }

          <ButtonMusic onClick={handleMusic}> {musicState ? "Música: Encendida" : "Música: Apagada" }</ButtonMusic>
          
          
        </Espacio>
    </>

  )
}
