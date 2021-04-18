export default {
  contactCoach(context, payload) {
    const NewRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    context.commit('addRequest', NewRequest);
  }
};