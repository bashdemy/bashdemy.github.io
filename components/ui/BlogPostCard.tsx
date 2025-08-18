import Card from './Card';
import Tag from './Tag';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  readTime: string;
  external?: boolean;
  link?: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card as="article" className="group hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <time
          className="text-sm text-theme-muted font-body"
          dateTime={post.date}
        >
          {formatDate(post.date)}
        </time>
        <span className="text-sm text-theme-muted font-body">
          {post.readTime}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-theme-primary mb-3 group-hover:text-theme-accent transition-colors font-heading">
        {post.title}
      </h3>

      <p className="text-theme-secondary mb-4 line-clamp-3 font-body description">
        {post.summary}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <Tag key={tag} variant="soft">
              {tag}
            </Tag>
          ))}
        </div>

        {post.external ? (
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-accent hover:text-theme-accent-hover font-medium text-sm transition-colors font-heading"
          >
            Read on Substack →
          </a>
        ) : (
          <button className="text-theme-accent hover:text-theme-accent-hover font-medium text-sm transition-colors font-heading">
            Read more →
          </button>
        )}
      </div>
    </Card>
  );
}

export default BlogPostCard;
