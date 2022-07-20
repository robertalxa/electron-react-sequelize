import { Button } from '../Button'
import { Container, Image, Text } from './styles'

export function Greetings() {
  function handleSayHello() {
    window.User.sendMessage('Hello World');
    window.User.insereUser();
    window.User.buscaUsers();

    console.log('Message sent! Check main process log in terminal.')
  }

  return (
    <Container>
      <Image
        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        alt="ReactJS logo"
      />
      <Text>An Electron boilerplate including TypeScript, React, Jest and ESLint.</Text>
      <Button onClick={handleSayHello}>Send message to main process</Button>
    </Container>
  )
}
 
