import React from 'react';
import { Link } from 'gatsby';
import truncate from 'lodash/truncate';
import styles from './Feed.module.scss';

const Feed = ({ edges }) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={(edge.node.frontmatter.date)}>
            {edge.node.frontmatter.date}
          </time>
          {console.log(edge, 'edge')}
          <span className={styles['feed__item-meta-divider']} />
          <span className={styles['feed__item-meta-category']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <h2 className={styles['feed__item-title']}>
          <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <p className={styles['feed__item-description']}>{truncate(edge.node.frontmatter.description, { length: 190 })} &nbsp;
        <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>Read →</Link>
        </p>
      </div>
    ))}
  </div>
);

export default Feed;
