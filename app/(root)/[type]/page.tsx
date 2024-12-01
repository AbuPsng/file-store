import Card from "@/components/Card";
import Sort from "@/components/Sort";
import { getFiles } from "@/lib/actions/file-acitons";
import { convertFileSize, getFileTypesParams } from "@/lib/utils";
import { Models } from "node-appwrite";

const Page = async ({ searchParams, params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";
  const searchText = ((await searchParams)?.query as string) || "";
  const sort = ((await searchParams)?.sort as string) || "";
  const limit = 0;

  const types = getFileTypesParams(type) as FileType[];

  const files = await getFiles({ types, sort, searchText, limit });

  const filesSize = (files: File[]) => {
    const sumSize = files.reduce((total, file) => total + file.size, 0);
    return convertFileSize(sumSize);
  };

  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>
        <div className="total-size-section">
          <p className="body-1">
            Total :{" "}
            <span className="h5">
              {files.documents.length > 0 ? filesSize(files.documents) : "0 mb"}
            </span>
          </p>

          <div className="sort-container">
            <p className="body-1 hidden sm:block text-light-200">
              Sort by: <Sort />{" "}
            </p>
          </div>
        </div>
      </section>

      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file: Models.Document) => (
            <Card key={file.$id} file={file} />
          ))}
        </section>
      ) : (
        <p className="empty-list">No files uploaded</p>
      )}
    </div>
  );
};

export default Page;
