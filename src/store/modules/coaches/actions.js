export default {
  addCoach(context, data) {
    const coachData = {
      id: new Date().toISOString(),
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.description,
      hourlyRate: data.rate
    }

    context.commit('addCoach', coachData)
  }
}