import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Text, Icon } from '@chakra-ui/core';
import { list } from '../utils/eventService';

const Events = () => {
  const [events, setEvents] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      if (error) {
        setError(error);
      } else {
        setEvents(data);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <Heading mb={2} as="h1" size="md">
        Events page
      </Heading>
      {error && <p>{error}</p>}
      <Flex>
        {events &&
          events.map((event) => (
            <Box p="6" as="article" key={event.id}>
              <Heading mb={2} as="h2" size="sm">
                {event.name}
              </Heading>
              <Text fontSize="lg" mb={2}>
                {event.description}
              </Text>
              <Text fontSize="lg" mb={2}>
                <Icon name="time" mr={2} />
                {new Date(event.createdAt).toDateString()}
              </Text>
              <Text fontSize="lg">By: {event.user.email}</Text>
            </Box>
          ))}
      </Flex>
    </section>
  );
};

export default Events;
