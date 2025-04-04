import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";
import Badge from "react-bootstrap/Badge";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import moment from "moment";

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
  const [data, setData] = useState<GitHubCommit[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/daveborrel/til/commits")
      .then((response) => response.json())
      .then((data: GitHubCommit[]) => setData(data))
      .catch((error) => console.error("Error fetching commits:", error));
  }, []);

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Text>
          <strong>Today I Learned (TIL)</strong> – A collection of small (but
          mighty!) insights I’ve picked up along the way. Growth happens one
          "aha!" moment at a time.
        </Card.Text>
        {data.length > 0 ? (
          <ListGroup variant="flush">
            {data.slice(0, 10).map((commit) => (
              <ListGroup.Item
                key={commit.sha}
                className="d-flex justify-content-between align-items-center"
              >
                <Stack>
                  <a
                    href={commit.html_url}
                    className="text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {commit.commit.message}
                  </a>
                </Stack>
                <Badge bg="secondary">
                  {formatDate(commit.commit.author.date)}
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </Card.Body>
      <Card.Footer className="text-center">
        <Card.Link
          href="https://github.com/daveborrel/til"
          target="_blank"
          rel="noopener noreferrer"
          className="fw-bold"
        >
          <i className="bi bi-github me-1"></i> View on GitHub
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

function formatDate(date: string): string {
  return moment.utc(date).local().format("MM/DD/YYYY");
}
