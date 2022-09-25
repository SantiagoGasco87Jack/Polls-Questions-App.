import { CreateNewPollButton } from '../components/buttons/CreateNewPollButton';
import { Container } from '../components/containers/Container';
import { PostsList } from '../components/posts/PostsList';

export default function Home() {
  return (
    <Container>
      <CreateNewPollButton className="my-2" />
      <PostsList />
    </Container>
  );
}
