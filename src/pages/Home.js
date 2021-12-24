import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

function Home() {
  const selectedRepo = useSelector(({ repository }) => repository.selectedRepo);

  return (
    <div>
      <h2 className="text-lg font-bold mb-1">My Github account</h2>
      <div>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <strong>Name</strong>
              </td>
              <td>{selectedRepo?.name || "—"}</td>
            </tr>
            <tr>
              <td>
                <strong>Description</strong>
              </td>
              <td>{selectedRepo?.description || "—"}</td>
            </tr>
            <tr>
              <td>
                <strong>Language</strong>
              </td>
              <td>{selectedRepo?.language || "—"}</td>
            </tr>
            <tr>
              <td>
                <strong>Owner</strong>
              </td>
              <td>{selectedRepo?.owner?.login || "—"}</td>
            </tr>
            <tr>
              <td>
                <strong>Size</strong>
              </td>
              <td>{selectedRepo?.size || "—"}</td>
            </tr>
            <tr>
              <td>
                <strong>Last pushed</strong>
              </td>
              <td>
                {selectedRepo?.pushed_at
                  ? moment(selectedRepo?.pushed_at).format("DD, MMMM YYYY")
                  : "—"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
