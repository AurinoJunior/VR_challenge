import { parseUserDataResponse } from "./parseUserDataResponse";
import { userMock } from "../mocks/userMockData";

describe("parseUserDataResponse", () => {
  it("should return modified user object", () => {
    const userData = parseUserDataResponse(userMock);

    expect(userData.personInfos).toContain({
      id: 2,
    });
  });
});
