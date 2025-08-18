import PropTypes from 'prop-types';
import Card from './Card';
import Tag from './Tag';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function BlogPostCard({ post }) {
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

BlogPostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    readTime: PropTypes.string.isRequired,
    external: PropTypes.bool,
    link: PropTypes.string,
  }).isRequired,
};

export default BlogPostCard;
