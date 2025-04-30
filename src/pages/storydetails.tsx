import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const storydetails = () => {
  const { documentId } = useParams();
  interface Story {
    title: string;
    summary: string;
    cover_image?: { url: string };
    audio?: { url: string };
    content: string;
  }

  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await axios.get(
          `http://62.72.46.248:1337/api/stories/${documentId}?populate=*`
        );
        setStory(response.data.data);
      } catch (err) {
        setError(err as any);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [documentId]);

  return (
    <>
      {story && (
        <>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          <h2 className="">{story.title}</h2>
          <p>{story.summary}</p>
          <img src={story.cover_image?.url} alt="Story Cover" width="200" />
          <audio controls>
            <source src={story.audio?.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div className="">
            <div dangerouslySetInnerHTML={{ __html: story.content }} />
          </div>
        </>
      )}
    </>
  );
};

export default storydetails;
