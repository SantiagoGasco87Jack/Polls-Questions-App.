import { PollOption, PollOptionVote, Post, PostVote } from '@prisma/client';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Tooltip } from '../tooltip/Tooltip';
import { PostPollOptions } from './PostPollOptions';

dayjs.extend(relativeTime);
type PostPollProps = {
  post: Post & {
    PostVote: PostVote[];
    options: (PollOption & { userVotes: PollOptionVote[] })[];
    totalOptionsCount: number;
  };
  variant: 'inline' | 'fullWidth';
};
export function PostPoll(props: PostPollProps) {
  const { post, variant } = props;
  const { description, options, endsAt, commentsCount, createdAt, totalOptionsCount } = post;

  return (
    <>
      <PostPollOptions endsAt={endsAt} options={options} variant={variant} />
      <div className="flex gap-2">
        <p className="text-xs text-neutral-300">
          <span className="font-bold">{totalOptionsCount}</span> Votes
        </p>
        <p className="text-xs text-neutral-500">
          <span className="font-bold">{commentsCount}</span> Comments
        </p>
        <p className="text-xs text-neutral-500">submitted {dayjs(createdAt).from(dayjs())}</p>
        {variant === 'inline' && description && (
          <Tooltip title={description}>
            <p className="text-xs font-bold text-neutral-300">Description</p>
          </Tooltip>
        )}
      </div>
    </>
  );
}
