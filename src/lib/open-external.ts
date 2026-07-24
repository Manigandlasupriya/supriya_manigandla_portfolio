export function openExternal(url: string) {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (!newWindow) {
    window.location.href = url;
  }
}

export function externalClickHandler(url: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    openExternal(url);
  };
}
