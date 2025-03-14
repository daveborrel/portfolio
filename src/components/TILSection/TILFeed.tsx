import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

// Define the interface for the GitHub commit data
interface GitHubCommit {
  sha: string;
  html_url: string;
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
}

export const TILFeed = () => {
  let [data, setData] = useState<GitHubCommit[]>([]); // Set initial state as an empty array

  useEffect(() => {
    fetch("https://api.github.com/repos/daveborrel/til/commits")
      .then((response) => response.json())
      .then((data: GitHubCommit[]) => setData(data)) // Type the data parameter
      .catch((error) => console.error("Error fetching commits:", error));
  }, []);

  return (
    <>
      <Card>
        <Card.Header className="text-center">TIL Feed</Card.Header>
        <Card.Body>
          <Card.Text>
            🚀 Today I Learned (TIL) – A collection of small (but mighty!)
            insights I’ve picked up along the way. Whether it’s coding tricks,
            life lessons, or random fun facts, I believe growth happens one
            "aha!" moment at a time. 📚💡
          </Card.Text>
          <ListGroup>
            {data.length > 0 ? (
              data.slice(0, 10).map((commit) => (
                <ListGroup.Item key={commit.sha}>
                  <a href={commit.html_url}>{commit.commit.message}</a> -
                  <strong>{commit.commit.author.date}</strong>
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>Loading...</ListGroup.Item> // Show a loading state
            )}
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          {" "}
          <Card.Link
            href={"https://github.com/daveborrel/til"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github me-1"></i> Github
          </Card.Link>
        </Card.Footer>
      </Card>
    </>
  );
};
