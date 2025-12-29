import Card from "./Card";
import Tag from "./Tag";
import { LOCALE_COPY, Locale } from "../../constants/locale";

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
  locale?: Locale;
}

function formatDate(dateString: string, locale: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogPostCard({ post, locale = "en" }: BlogPostCardProps) {
  const copy = LOCALE_COPY[locale].blog;
  return (
    <Card as="article" className="group hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <time
          className="text-sm text-theme-muted font-body"
          dateTime={post.date}
        >
          {formatDate(post.date, copy.dateLocale)}
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
            {copy.readExternal}
          </a>
        ) : (
          <button className="text-theme-accent hover:text-theme-accent-hover font-medium text-sm transition-colors font-heading">
            {copy.readMore}
          </button>
        )}
      </div>
    </Card>
  );
}

export default BlogPostCard;
