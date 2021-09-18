import os
import sys

sys.path.append(os.path.join(os.path.dirname(__file__), "../../../"))
from scheduled_tasks.reddit.config import *
from scheduled_tasks.reddit.get_reddit_trending_stocks.AutoDD import *


def main():
    print("-" * 100)
    print("Getting submissions from Reddit...")
    for index, subreddit in enumerate(subreddits):
        current_scores, prev_scores, total_rocket_score, total_posts_score, \
            total_upvotes_score, total_comments_score = get_submission_generators(interval, subreddit,
                                                                                  n_num=num_posts[index])

        print("Populating results for {}...".format(subreddit))
        results_df = populate_df(current_scores, prev_scores, interval)
        results_df = filter_df(results_df, minimum_score[index])

        print("Counting rockets, posts, upvotes, comments for {}...".format(subreddit))
        results_df.insert(loc=4, column='rockets', value=pd.Series(total_rocket_score))
        results_df.insert(loc=5, column='posts', value=pd.Series(total_posts_score))
        results_df.insert(loc=6, column='upvotes', value=pd.Series(total_upvotes_score))
        results_df.insert(loc=7, column='comments', value=pd.Series(total_comments_score))

        print("Getting financial stats for {}...".format(subreddit))
        results_df = get_financial_stats(results_df, minimum_volume[index], minimum_mkt_cap[index], allow_threading)
        results_df.sort_values(by=results_df.columns[0], inplace=True, ascending=False)
        print_df(results_df, file_name, save_to_sql, save_to_csv, subreddit)
        print()


if __name__ == '__main__':
    main()
