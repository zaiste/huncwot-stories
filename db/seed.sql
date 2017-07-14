DROP DATABASE IF EXISTS huncwot_stories;
CREATE DATABASE huncwot_stories;

\c huncwot_stories;

CREATE TABLE stories (
  id serial primary key,
  title varchar,
  url varchar,
  score integer,
  submitted_at timestamp without time zone
);

CREATE TABLE users (
  id serial primary key,
  name varchar
);

INSERT INTO stories (title, url, score, submitted_at)
VALUES
    ('Redis on the Raspberry Pi: adventures in unaligned lands', 'http://antirez.com/news/111', 84, '2017-01-08 14:05:06'),
    ('Alibaba Cloud', 'https://www.alibabacloud.com/', 407, '2017-02-02 14:05:06'),
    ('Universal Now: Now, on Every Cloud', 'https://zeit.co/blog/universal-now', 5, '2017-03-03 14:05:06'),
    ('Invisible unicorns: Big companies that started with little or no money', 'https://techcrunch.com/2017/07/01/invisible-unicorns-35-big-companies-that-started-with-little-or-no-money/', 24, '2017-04-04 14:05:06'),
    ('Oculus Rift and Touch receive yet another price cut, now just $499', 'https://techcrunch.com/2017/07/14/oculus-rift-and-touch-receive-yet-another-price-cut-now-just-499/', 7, '2017-05-05 14:05:06'),
    ('Toward Go 2', 'https://blog.golang.org/toward-go2', 697, '2017-06-06 14:05:06'),
    ('Ravens can plan for future as well as 4-year-old children can', 'https://www.newscientist.com/article/2140668-ravens-can-plan-for-future-as-well-as-4-year-old-children-can/', 26, '2017-07-07 14:05:06');
