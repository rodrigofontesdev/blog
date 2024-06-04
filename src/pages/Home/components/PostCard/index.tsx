import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Body, Card, Title } from './styles'

interface PostCardProps {
  title: string
  body: string | null
  createdAt: string
}

export function PostCard({ title, body, createdAt }: PostCardProps) {
  return (
    <Card>
      <Title>
        <span>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>

        {title}
      </Title>

      <Body>
        <Markdown remarkPlugins={[remarkGfm]} disallowedElements={['a']} unwrapDisallowed>
          {body}
        </Markdown>
      </Body>
    </Card>
  )
}
