import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  markTransfer,
  markOneTransfer,
  Transfer,
} from "../../../redux/slices/transfersSlice";

const Transfers = () => {
  const dispatch = useAppDispatch();
  const transfers = useAppSelector((state) => state.transfers.transfers);
  const markTransferHandler = (
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    const { name } = event.target as HTMLInputElement;
    const { checked } = event.target as HTMLInputElement;
    if (name) {
      dispatch(markTransfer({ name: name as Transfer, checked: checked }));
    }
  };

  const markOneTransferHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { name } = event.target as HTMLButtonElement;
    dispatch(markOneTransfer({ name: name as Transfer }));
  };

  return (
    <div className="options_transfers">
      <h5 className="options_transfers_title title">КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
      <div className="options_transfers_form-group">
        <label onClick={markTransferHandler}>
          <input
            type="checkbox"
            name="Все"
            className="real-checkbox"
            checked={transfers["Все"]}
          />
          <span className="custom-checkbox"></span>
          Все
        </label>
      </div>
      <div className="options_transfers_form-group">
        <label onClick={markTransferHandler}>
          <input
            type="checkbox"
            name="Без пересадок"
            className="real-checkbox"
            checked={transfers["Без пересадок"]}
          />
          <span className="custom-checkbox"></span>
          Без пересадок
        </label>
        <button
          className="options_transfers_btn_only"
          name="Без пересадок"
          onClick={markOneTransferHandler}
        >
          только
        </button>
      </div>
      <div className="options_transfers_form-group">
        <label onClick={markTransferHandler}>
          <input
            type="checkbox"
            name="1 пересадка"
            className="real-checkbox"
            checked={transfers["1 пересадка"]}
          />
          <span className="custom-checkbox"></span>1 пересадка
        </label>
        <button
          className="options_transfers_btn_only"
          name="1 пересадка"
          onClick={markOneTransferHandler}
        >
          только
        </button>
      </div>
      <div className="options_transfers_form-group">
        <label onClick={markTransferHandler}>
          <input
            type="checkbox"
            name="2 пересадки"
            className="real-checkbox"
            checked={transfers["2 пересадки"]}
          />
          <span className="custom-checkbox"></span>2 пересадки
        </label>
        <button
          className="options_transfers_btn_only"
          name="2 пересадки"
          onClick={markOneTransferHandler}
        >
          только
        </button>
      </div>
      <div className="options_transfers_form-group">
        <label onClick={markTransferHandler}>
          <input
            type="checkbox"
            name="3 пересадки"
            className="real-checkbox"
            checked={transfers["3 пересадки"]}
          />
          <span className="custom-checkbox"></span>3 пересадки
        </label>
        <button
          className="options_transfers_btn_only"
          name="3 пересадки"
          onClick={markOneTransferHandler}
        >
          только
        </button>
      </div>
    </div>
  );
};

export default Transfers;
