UPDATE
    comments
SET
    status = :new_status
WHERE
    id = :id;
