"use client";

// import { useParams } from "next/navigation";

export default function BlogContentPage() {
  // const { slug } = useParams<{ slug: string }>();

  // const graphqlQuery = {
  //   operationName: "ReadPost",
  //   variables: {
  //     username: process.env.VELOG_USER_NAME!,
  //     url_slug: slug,
  //   },
  //   query: `
  //     query ReadPost($username: String, $url_slug: String) {
  //       post(username: $username, url_slug: $url_slug) {
  //         id
  //         title
  //         released_at
  //         updated_at
  //         tags
  //         body
  //         short_description
  //         is_markdown
  //         is_private
  //         is_temp
  //         thumbnail
  //         comments_count
  //         url_slug
  //         likes
  //         liked
  //         user {
  //           id
  //           username
  //           is_followed
  //           profile {
  //             id
  //             display_name
  //             thumbnail
  //             short_bio
  //             profile_links
  //           }
  //           velog_config {
  //             title
  //           }
  //         }
  //         comments {
  //           id
  //           user {
  //             id
  //             username
  //             profile {
  //               id
  //               thumbnail
  //               display_name
  //             }
  //           }
  //           text
  //           replies_count
  //           level
  //           created_at
  //           level
  //           deleted
  //         }
  //         series {
  //           id
  //           name
  //           url_slug
  //           series_posts {
  //             id
  //             post {
  //               id
  //               title
  //               url_slug
  //               user {
  //                 id
  //                 username
  //               }
  //             }
  //           }
  //         }
  //         linked_posts {
  //           previous {
  //             id
  //             title
  //             url_slug
  //             user {
  //               id
  //               username
  //             }
  //           }
  //           next {
  //             id
  //             title
  //             url_slug
  //             user {
  //               id
  //               username
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `,
  // };

  // const fetchGraphQLData = async () => {
  //   const response = await fetch("https://v3.velog.io/graphql", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(graphqlQuery),
  //   });

  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }

  //   console.log(response.json());
  //   return response.json();
  // };

  // const test = await fetchGraphQLData();

  return <>ㅅㄷㄴㅅ</>;
}
