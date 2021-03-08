import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>My trips</S.Heading>

      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eveniet
          at quae esse culpa soluta autem nihil magnam vitae, ipsam consectetur
          eum cum similique fuga perferendis nulla odit rerum dolorum!
        </p>
      </S.Body>
    </S.Content>
  )
}

export default AboutTemplate
