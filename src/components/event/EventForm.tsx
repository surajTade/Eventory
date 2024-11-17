import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../components/Button";
import { eventSchema } from "../../utils/validations";
import { PUBLIC, PRIVATE, INVITE_ONLY } from "../../utils/constants";

const formFields = [
  { name: "title", label: "Title", placeholder: "Title of your event" },
  {
    name: "description",
    label: "Description",
    placeholder: "A short description about your event",
  },
  { name: "eventType", label: "Event Type", placeholder: "Event category" },
];

const EventForm = ({
  initialValues,
  onSubmit,
}: {
  initialValues: any;
  onSubmit: any;
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={eventSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {({ values }) => (
        <Form className="space-y-4">
          {/* Render reusable fields */}
          {formFields.map(({ name, label, placeholder }) => (
            <div key={name} className="form-group">
              <label className="block mb-1 font-medium">
                {label} <span className="text-red-500">*</span>
              </label>
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
              <label className="block mb-1 font-medium">
                Location (URL) <span className="text-red-500">*</span>
              </label>
              <Field name="location" className="w-full p-2 border rounded" />
              <ErrorMessage
                name="location"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          )}

          <div className="form-group">
            <label className="block mb-1 font-medium">
              Start Date <span className="text-red-500">*</span>
            </label>
            <Field
              type="datetime-local"
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
            <label className="block mb-1 font-medium">
              End Date <span className="text-red-500">*</span>
            </label>
            <Field
              type="datetime-local"
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
              <label className="block mb-1 font-medium">
                Price <span className="text-red-500">*</span>
              </label>
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
            <label className="block mb-1 font-medium">Event Image (URL)</label>
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
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EventForm;
