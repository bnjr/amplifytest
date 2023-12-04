import { list } from "aws-amplify/storage";

try {
  const result = await list({
    prefix: "",
  });
} catch (error) {
  console.log(error);
}
