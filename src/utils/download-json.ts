function download(filename: string, data: any) {
  const blob = new Blob([JSON.stringify(data,null,2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
export default download;
