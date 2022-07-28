import Container from '../components/UI/container';
import Layout from '../components/UI/layout';

export default function Custom404() {
  return (
    <Layout>
      <Container>
        <div className='text-center'>
          <div className='pb-4 text-8xl'>🤔</div>
          <h1>Siden ble ikke funnet (404)</h1>
          <p className='pt-4'>
            Nå har du virkelig rotet det til for deg selv...
          </p>
        </div>
      </Container>
    </Layout>
  );
}
