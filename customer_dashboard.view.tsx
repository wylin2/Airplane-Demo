import {
  Stack,
  Table,
  Title,
  useComponentState,
  Card,
  Text,
  Button,
} from "@airplane/views";

// Views documentation: https://docs.airplane.dev/views/getting-started
const CustomerDashboard = () => {
  const accountsState = useComponentState("comments");
  const selectedCommment = accountsState.selectedRow;


  return (
    <Stack>
      <Title>Comments dashboard</Title>
      <Table
        id="comments"
        title="Comments"
        task="demo_list_comments"
        hiddenColumns={["id"]}
        columns={[{ accessor: "comment", label: "Comment", canEdit: true }]}
        // rowActions={{ slug: "demo_update_account", label: "Update" }}
        rowSelection="single"
      />

      {selectedCommment && (
        <Stack>
          <CommentDetail selected={selectedCommment} />
        </Stack>
      )}
    </Stack>
  );
};

const CommentDetail = ({ selected }) => {
  const { id, comment, status } = selected;
  const commentDetail = `### id: _${id}_
### Comment
${comment}
### Status
**${status}**`;

  return (
    <Card>
      <Text>{commentDetail}</Text>
      <Button
        task={{
          slug: "demo_update_comment",
          params: { id, new_status: 'rejected' },
          refetchTasks: "demo_list_comments",
        }}
      >
        Reject
      </Button>
      <Button
        task={{
          slug: "demo_update_comment",
          params: { id, new_status: 'approved' },
          refetchTasks: "demo_list_comments",
        }}
      >
        Approve
      </Button>
    </Card>
  );
};

export default CustomerDashboard;
