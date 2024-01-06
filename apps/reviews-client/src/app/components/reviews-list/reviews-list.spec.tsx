import { render, screen } from '@testing-library/react';
import ReviewsList, { ReviewExtension } from './reviews-list';

describe('ReviewsList', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<ReviewsList reviews={[]} totalCount={0} />);
		expect(baseElement).toBeTruthy();
	});

	it('should render list of reviews', () => {
		const reviews = [
			{
				id: '1',
				reviewerId: 'user-1',
				companyId: 'company-1',
				createdOn: '2020-01-01T00:00:00.000Z',
				reviewText: 'asdf',
				rating: 3,
				company: { id: 'company-1', name: 'company' },
				user: { id: 'user-1', firstName: 'user', lastName: 'one', email: 'e@mail.com' },
			},
		];
		render(<ReviewsList reviews={reviews} totalCount={1} />);
		expect(screen.getByText('user one')).toBeInTheDocument();
	});

	it('should display message if no reviews are found', () => {
		const reviews: ReviewExtension[] = [];
		render(<ReviewsList reviews={reviews} totalCount={0} />);
		expect(screen.getByText('No reviews found.')).toBeInTheDocument();
	});

	it('should display the review text if provided', () => {
		const reviews = [
			{
				id: '1',
				reviewerId: 'user-1',
				companyId: 'company-1',
				createdOn: '2020-01-01T00:00:00.000Z',
				reviewText: 'asdf',
				rating: 3,
				company: { id: 'company-1', name: 'company' },
				user: { id: 'user-1', firstName: 'user', lastName: 'one', email: 'e@mail.com' },
			},
		];
		render(<ReviewsList reviews={reviews} totalCount={1} />);
		expect(screen.getByText('asdf')).toBeInTheDocument();
	});

	// Feel free to add any additional tests you think are necessary
});
