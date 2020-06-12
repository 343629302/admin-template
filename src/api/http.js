import interceptor from "./interceptor";

export async function getHome() {
  const res = await interceptor.get("/api/index");
  return res;
}
