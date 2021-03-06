import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import {ModalProgressBar} from "../../../../../../_metronic/_partials/controls";

export function CountryEditDialogHeader({ id }) {
  // Countries Redux state
  const { countryForEdit, actionsLoading } = useSelector(
    (state) => ({
      countryForEdit: state.countries.countryForEdit,
      actionsLoading: state.countries.actionsLoading,
    }),
    shallowEqual
  );

  const [title, setTitle] = useState("");
  // Title couting
  useEffect(() => {
    let _title = id ? "" : "New Country";
    if (countryForEdit && id) {
      _title = `Edit country '${countryForEdit.firstName} ${countryForEdit.lastName}'`;
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [countryForEdit, actionsLoading]);

  return (
    <>
      {actionsLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
