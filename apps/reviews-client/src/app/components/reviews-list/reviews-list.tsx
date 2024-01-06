import Alert from '@mui/material/Alert';
import TaskIcon from '@mui/icons-material/Task';
import { Card, Divider, Rating, Typography } from '@mui/material';
import { Company, Review, User } from '@prisma/client';

export interface ReviewExtension extends Review {
	company: Company;
	user: User;
}

/* eslint-disable-next-line */
export interface ReviewsListProps {
	reviews: ReviewExtension[];
	totalCount: number;
}

export function ReviewsList(props: ReviewsListProps) {
	const noReviewsMessage = 'No reviews found.';
	if (props.reviews.length > 0) {
		const reviewsList = props.reviews.map((review) => (
			<li key={review.id}>
				<Card variant="outlined" style={{ margin: '25px', padding: '15px' }}>
					<Typography variant="h2">{review.company.name}</Typography>
					<Typography variant="h4">
						{review.user.firstName} {review.user.lastName}
					</Typography>
					<Typography variant="caption"> Created On: {review.createdOn}</Typography>
					<Divider></Divider>
					<Typography variant="body2">
						<Rating value={review.rating} readOnly></Rating>
					</Typography>
					<Typography variant="body1">{review.reviewText}</Typography>
				</Card>
			</li>
		));
		return (
			<div>
				{props.totalCount} reviews found. <Divider></Divider>
				<ul style={{ listStyleType: 'none' }}>{reviewsList}</ul>
			</div>
		);
	} else {
		return (
			<Alert severity="error" icon={<TaskIcon />}>
				{noReviewsMessage}
			</Alert>
		);
	}
}

export default ReviewsList;
