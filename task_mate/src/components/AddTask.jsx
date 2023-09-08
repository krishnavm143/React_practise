export default function AddTask() {
  return (
    <section className="addtask">
      <form>
        <input type="text" id="task" name="task" placeholder="task name" />
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
}
