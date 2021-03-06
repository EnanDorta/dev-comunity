import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import appConfig from '../config.json'
import { api } from '../service/api.js';

function Title(props) {
  const Tag = props.tag || 'h1';

  return(
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.primary['050']};
          font-size: 32px;
          font-weight: 600;
        }
      `}</style>
    </>
  )
}

export default function PaginaInicial() {
  //definindo um estado para username
  const [username, setUsername] = useState("")
  const [user, setUser] = useState([])
  //definindo uma variavel para armazenar o useRouter
  const routes = useRouter()

    // useEffect(() => {
    //   api.get(`api.github.com/users/${username}`)
    //   .then(response => console.log(response))
    // }, [username])

    // useEffect(() => {
    //   fetch(`https://api.github.com/users/${username}`)
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    // }, [])
  

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.neutrals[200],   
          backgroundImage: 'url(/backgroundImg.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[600],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={event => {
              event.preventDefault()
              console.log('usuariodigitou')
              routes.push('/chat')
          }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Title tag="h2">Dev Comunity</Title>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[200] }}>
              {appConfig.name}
            </Text>

            <TextField
            //pegando o valor do username
              value={username} 
              minLength="3"
              //alterando o valor do username em tempo real
              onChange={event => setUsername(event.target.value)} 
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[300],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[400],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[700],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
              <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
              />
              <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
              >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}