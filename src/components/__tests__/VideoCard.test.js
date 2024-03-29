import React from "react";
import { render, screen } from "@testing-library/react";
import VideoCard from "../VideoCard"; // Adjust the import path as necessary

describe("VideoCard", () => {
  const mockInfo = {
    snippet: {
      publishedAt: "2021-01-01T00:00:00Z",
      channelTitle: "Test Channel",
      thumbnails: {
        maxres: { url: "http://example.com/maxres.jpg" },
        high: { url: "http://example.com/high.jpg" },
        standard: { url: "http://example.com/standard.jpg" },
        medium: { url: "http://example.com/medium.jpg" },
        default: { url: "http://example.com/default.jpg" },
      },
      localized: {
        title: "Test Video Title",
      },
    },
    statistics: {
      viewCount: "12345",
    },
  };

  it("renders the video thumbnail with alt text", async () => {
    render(<VideoCard info={mockInfo} />);
    const thumbnail = screen.getByAltText("video-img");
    expect(thumbnail).toBeInTheDocument();
    expect(thumbnail).toHaveAttribute(
      "src",
      mockInfo.snippet.thumbnails.maxres.url
    );
  });

  it("renders the video title", () => {
    render(<VideoCard info={mockInfo} />);
    const title = screen.getByText(mockInfo.snippet.localized.title);
    expect(title).toBeInTheDocument();
  });

  it("renders the channel title", () => {
    render(<VideoCard info={mockInfo} />);
    const channelTitle = screen.getByText(mockInfo.snippet.channelTitle);
    expect(channelTitle).toBeInTheDocument();
  });

  it("renders the view count and published date", () => {
    render(<VideoCard info={mockInfo} />);
    const stats = screen.getByText(
      `${mockInfo.statistics.viewCount} . ${mockInfo.snippet.publishedAt}`
    );
    expect(stats).toBeInTheDocument();
  });
});
