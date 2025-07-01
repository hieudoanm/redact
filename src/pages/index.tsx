import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@redact/components/Home'), { ssr: false });

const HomePage = () => {
	return <Home />;
};

export default HomePage;
