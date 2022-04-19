import { IconFile, IconFolder, IconFolderOpen } from "./Icons";

export const FilesViewer = ({ files, onBack, onOpen }) => {
  return (
    <table className="table">
      <thead>
        <tr className="clickable" onClick={onBack}>
          <td className="icon-row">
            <IconFolderOpen />
          </td>
          <td>...</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {files.map(({ name, directory, size }, index) => (
          <tr key={index} className={directory ? `clickable` : ``} onClick={() => directory && onOpen(name)}>
            <td className="icon-row">
              {directory ? <IconFolder /> : <IconFile />}
            </td>
            <td>{name}</td>
            <td>
              <span className="float-end">{size}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
