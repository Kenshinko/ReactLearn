import { getAnimeFacts, getAnimeFactsFailure, getAnimeFactsRequest, getAnimeFactsSuccess, GET_ANIMEFACTS_SUCCESS } from "../actions";

describe("getAnimeFactsSuccess tests", () => {
  it("returns obj with type and payload", () => {
    const payload = [];
    const expected = {
      type: GET_ANIMEFACTS_SUCCESS,
      payload,
    };

    const received = getAnimeFactsSuccess(payload);
    expect(expected).toEqual(received);
  });
});

describe("getAnimeFactsTest", () => {
  it("calls fn passed as an arg with getAnimeFactsReq", () => {
    const mockDispatch = jest.fn();

    getAnimeFacts()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(getAnimeFactsRequest());
  });

  it("calls fn passed as an arg with getAnimeFactsSuc if fetch was successful", async () => {
    const mockDispatch = jest.fn();
    const result = ["test"];
    // eslint-disable-next-line no-undef
    fetchMock.mockResponseOnce(JSON.stringify(result));

    await getAnimeFacts()(mockDispatch);

    expect(mockDispatch).toHaveBeenLastCalledWith(getAnimeFactsSuccess(result));
  });

  it("calls fn passed as an arg with getAnimeFactsFail if fetch was unsuccessful", async () => {
    const mockDispatch = jest.fn();
    const error = new Error("some fetch error");
    // eslint-disable-next-line no-undef
    fetchMock.mockRejectOnce(error);

    await getAnimeFacts()(mockDispatch);

    expect(mockDispatch).toHaveBeenLastCalledWith(getAnimeFactsFailure(error));
  });
});
