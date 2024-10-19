import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../../components/Button";
import { Event } from "../../utils/validations";
import { addEvent } from "../../db/eventManager";
import { useUser } from "../../Context/UserContext";
import { INVITE_ONLY, PRIVATE, PUBLIC } from "../../utils/constants";

const formFields = [
  { name: "title", label: "Title", placeholder: "Title of your event" },
  {
    name: "description",
    label: "Description",
    placeholder: "A short description about your event",
  },
  { name: "eventType", label: "Event Type", placeholder: "Event category" },
];

const CreateEvent = () => {
  const { user } = useUser();

  const initialValues = {
    title: "",
    description: "",
    eventType: "",
    isOnline: true,
    location: "",
    startDate: "",
    endDate: "",
    isFree: true,
    price: 0,
    capacity: 10,
    eventImage: "",
    visibility: PUBLIC,
  };

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: any
  ) => {
    const date = new Date();
    const createEventValues: Event = {
      ...values,
      organizerId: user!.uid,
      attendeesCount: 0,
      createdAt: date,
      updatedAt: date,
      startDate: new Date(values.startDate),
      endDate: new Date(values.endDate),
      visibility:
        values.visibility === PUBLIC
          ? PUBLIC
          : values.visibility === PRIVATE
          ? PRIVATE
          : INVITE_ONLY,
    };

    await addEvent(createEventValues);
    console.log("Event added successfully");
    resetForm();
  };

  return (
    <div className="mt-6 mx-auto p-6 bg-white border w-full rounded shadow-md">
      <h1 className="text-3xl text-center uppercase font-bold mb-4">
        Add Event
      </h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className="space-y-4">
            {formFields.map(({ name, label, placeholder }) => (
              <div key={name} className="form-group">
                <label className="block mb-1 font-medium">{label}</label>
                <Field
                  name={name}
                  className="w-full p-2 border rounded"
                  placeholder={placeholder}
                />
                <ErrorMessage
                  name={name}
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            ))}

            <div className="form-group">
              <label className="block mb-1 font-medium">
                Is Online?
                <Field type="checkbox" name="isOnline" className="ml-2" />
              </label>
            </div>

            {!values.isOnline && (
              <div className="form-group">
                <label className="block mb-1 font-medium">Location (URL)</label>
                <Field name="location" className="w-full p-2 border rounded" />
                <ErrorMessage
                  name="location"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            )}

            <div className="form-group">
              <label className="block mb-1 font-medium">Start Date</label>
              <Field
                type="date"
                name="startDate"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="startDate"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="form-group">
              <label className="block mb-1 font-medium">End Date</label>
              <Field
                type="date"
                name="endDate"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="endDate"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="form-group">
              <label className="block mb-1 font-medium">
                Is Free?
                <Field type="checkbox" name="isFree" className="ml-2" />
              </label>
            </div>

            {!values.isFree && (
              <div className="form-group">
                <label className="block mb-1 font-medium">Price</label>
                <Field
                  name="price"
                  type="number"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            )}

            <div className="form-group">
              <label className="block mb-1 font-medium">Capacity</label>
              <Field
                name="capacity"
                type="number"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="capacity"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="form-group">
              <label className="block mb-1 font-medium">
                Event Image (URL)
              </label>
              <Field name="eventImage" className="w-full p-2 border rounded" />
              <ErrorMessage
                name="eventImage"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="form-group">
              <label className="block mb-1 font-medium">Visibility</label>
              <Field
                as="select"
                name="visibility"
                className="w-full p-2 border rounded"
              >
                <option value={PUBLIC}>Public</option>
                <option value={PRIVATE}>Private</option>
                <option value={INVITE_ONLY}>Invite Only</option>
              </Field>
              <ErrorMessage
                name="visibility"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="w-full flex justify-center">
              <Button
                type="submit"
                className="p-2 text-white rounded transition text-xl w-1/3"
              >
                Add Event
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateEvent;
