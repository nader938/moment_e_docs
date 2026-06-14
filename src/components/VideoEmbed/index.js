import styles from './styles.module.css';

/**
 * Responsive 16:9 video embed.
 *
 * Usage (in any .mdx file):
 *   import VideoEmbed from '@site/src/components/VideoEmbed';
 *   <VideoEmbed url="https://www.youtube.com/embed/VIDEO_ID" title="..." caption="..." />
 *
 * Leave url empty to show a "coming soon" placeholder.
 */
export default function VideoEmbed({ url, title, caption }) {
  return (
    <figure>
      <div className={styles['video-embed-wrap']}>
        {url ? (
          <iframe
            src={url}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className={styles['video-placeholder']}>
            <span className={styles['video-placeholder-icon']}>🎬</span>
            <span className={styles['video-placeholder-text']}>
              Video coming soon
            </span>
          </div>
        )}
      </div>
      {caption && <figcaption className={styles['video-caption']}>{caption}</figcaption>}
    </figure>
  );
}
