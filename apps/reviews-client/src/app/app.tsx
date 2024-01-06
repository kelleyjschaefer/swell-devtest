import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import WebFont from 'webfontloader';
import Header from './components/header/header';
import ReviewsList from './components/reviews-list/reviews-list';
import { theme } from './theme';
import { useEffect, useState } from 'react';

WebFont.load({
	google: {
		families: ['Montserrat:500,600,700'],
	},
});

export function App() {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4200/api/reviews')
			.then((res) => res.json())
			.then((data) => setReviews(data.reviews));
	});
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Container sx={{ mt: 2, typography: 'body1' }}>
				<ReviewsList reviews={reviews} totalCount={reviews.length} />
			</Container>
		</ThemeProvider>
	);
}

export default App;
