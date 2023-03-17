import { Container, Links, Content } from './styles'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details(){
  return(
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Possimus veritatis 
            accusantium, laboriosam, minima dolorem 
            rem dignissimos deleniti eos nisi eum sequi 
            ipsam rerum nesciunt dolor unde aliquid, optio 
            cumque eaque!
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://rocketseat.com.br</a></li>   
              <li><a href="#">https://rocketseat.com.br</a></li>   
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="NodeJS"/>
            <Tag title="JavaScript"/>
          </Section>

          <Button title="Voltar"/>

        </Content>
      </main>
    </Container>
  )
}