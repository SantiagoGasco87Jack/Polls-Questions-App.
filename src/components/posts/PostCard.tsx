import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import { UpvoteDownvote } from '../buttons/UpvoteDownvote';

dayjs.extend(relativeTime);
type PostCardProps = {
  topicId: string;
  postId: string;
  title: string;

  /** Total of upvotes - downvotes. */
  totalCount: number;

  /** 1 if the user has upvoted this post, -1 if they've downvoted, else 0. */
  userMagnitude: -1 | 0 | 1;

  commentsCount: number;
  createdAt: Date;
};
export function PostCard(props: PostCardProps) {
  const { postId, title, totalCount, commentsCount, topicId, userMagnitude, createdAt } = props;

  return (
    <Link href={`/${topicId}/${postId}`}>
      <div className="group my-2 flex cursor-pointer rounded-md bg-neutral-800 p-2 hover:bg-neutral-700">
        <UpvoteDownvote
          className="hover:bg-neutral-600"
          postId={postId}
          userMagnitude={userMagnitude}
          voteCount={totalCount}
        />
        <div className="flex flex-col">
          <a className="flex-grow text-lg text-neutral-300 group-hover:text-white">
            Title: {title}
          </a>
          <div className="flex gap-2">
            <p className="text-xs text-neutral-500">submitted {dayjs(createdAt).from(dayjs())}</p>
            <p className="text-xs font-bold text-neutral-300">{commentsCount} Comments</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
